export const usersSchemas = {
    "login": {
        "properties": {
            "email": { "type": "string" },
            "password": { "type": "string" }
        },
        "additionalProperties": false,
        "required": [ "email", "password" ]
    }
};
