export const applicantsSchemas = {
    "applicant": {
        "full": {
            "properties": {
                "firstName": {"type": "string"},
                "lastName": {"type": "string"},
                "description": {"type": "string"}
            },
            "additionalProperties": false,
            "required": ["firstName", "lastName", "description"]
        },
        "partial": {
            "properties": {
                "firstName": {"type": "string"},
                "lastName": {"type": "string"},
                "description": {"type": "string"}
            },
            "additionalProperties": false,
            "minProperties": 1
        }
    }
};
