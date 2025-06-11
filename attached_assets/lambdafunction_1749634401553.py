import boto3 import json

bedrock_agent_runtime = boto3.client("bedrock-agent-runtime", region_name="ap-south-1")

AGENT_ID = "ESOZJJ8BHZ" AGENT_ALIAS_ID = "K9ZDXS7H5I"

def lambda_handler(event, context): if event['httpMethod'] == 'OPTIONS': return { 'statusCode': 200, 'headers': { 'Access-Control-Allow-Origin': '', 'Access-Control-Allow-Headers': '', 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET' }, 'body': json.dumps('Preflight OK') }

body_str = event.get('body') if not body_str: return { 'statusCode': 400, 'body': json.dumps({'error': 'Missing request body'}) }

try: body = json.loads(body_str) except json.JSONDecodeError: return { 'statusCode': 400, 'body': json.dumps({'error': 'Invalid JSON in request body'}) }

user_message = body.get('message', '') session_id = "session-" + context.aws_request_id # unique session ID per request

try: response = bedrock_agent_runtime.invoke_agent( agentId=AGENT_ID, agentAliasId=AGENT_ALIAS_ID, sessionId=session_id, inputText=user_message )

full_response = ""
for event in response["completion"]:
    chunk = event.get("chunk", {})
    if "bytes" in chunk:
        full_response += chunk["bytes"].decode("utf-8")

return {
    'statusCode': 200,
    'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    },
    'body': json.dumps({'response': full_response})
}
except Exception as e: print("Error:", str(e)) return { 'statusCode': 500, 'body': json.dumps({'error': 'Invocation failed', 'details': str(e)}) }