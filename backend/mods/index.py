import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    """API для получения списка модов из базы данных"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method == 'GET':
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        cur.execute("""
            SELECT id, name, description, version, file_url, author, 
                   category, downloads, status, created_at
            FROM mods 
            WHERE status = 'approved'
            ORDER BY created_at DESC
        """)
        
        mods = cur.fetchall()
        cur.close()
        conn.close()
        
        mods_list = []
        for mod in mods:
            mods_list.append({
                'id': mod['id'],
                'name': mod['name'],
                'description': mod['description'],
                'version': mod['version'],
                'fileUrl': mod['file_url'],
                'author': mod['author'],
                'category': mod['category'],
                'downloads': mod['downloads'],
                'createdAt': mod['created_at'].isoformat() if mod['created_at'] else None
            })
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'mods': mods_list}),
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
