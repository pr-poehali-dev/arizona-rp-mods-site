import json
import os
import boto3
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    """API для синхронизации файлов из S3 в базу данных как модов"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method == 'POST':
        try:
            s3 = boto3.client('s3',
                endpoint_url='https://bucket.poehali.dev',
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
            )

            response = s3.list_objects_v2(Bucket='files')
            
            if 'Contents' not in response:
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'message': 'Нет файлов в хранилище', 'added': 0}),
                    'isBase64Encoded': False
                }

            conn = psycopg2.connect(os.environ['DATABASE_URL'])
            cur = conn.cursor(cursor_factory=RealDictCursor)

            added_count = 0
            for idx, obj in enumerate(response['Contents'], start=1):
                file_key = obj['Key']
                cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{file_key}"
                
                file_size_mb = round(obj['Size'] / (1024 * 1024), 2)
                
                mod_name = f"Мод #{idx}"
                mod_description = f"Файл: {file_key}, Размер: {file_size_mb} MB"
                
                cur.execute(
                    "SELECT id FROM mods WHERE file_url = %s",
                    (cdn_url,)
                )
                
                if not cur.fetchone():
                    cur.execute(
                        """INSERT INTO mods 
                        (name, description, version, file_url, author, category, downloads, status) 
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)""",
                        (mod_name, mod_description, '1.0', cdn_url, 'Система', 'Файлы', 0, 'approved')
                    )
                    added_count += 1

            conn.commit()
            cur.close()
            conn.close()

            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': f'Добавлено {added_count} модов из хранилища',
                    'added': added_count
                }),
                'isBase64Encoded': False
            }

        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
