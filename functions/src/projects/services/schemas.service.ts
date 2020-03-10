export const projectsSchemas = {
    "project": {
        "full": {
            "properties": {
                "title": { "type": "string" },
                "description": { "type": "string" },
                "priority": { "enum": [0, 1, 2, 3] },
                "status": { "enum": [0, 1, 2, 3, 4] }
            },
            "additionalProperties": false,
            "required": [ "title", "description", "priority", "status" ]
        },
        "partial": {
            "properties": {
                "title": { "type": "string" },
                "description": { "type": "string" },
                "priority": { "enum": [0, 1, 2, 3] },
                "status": { "enum": [0, 1, 2, 3, 4] }
            },
            "additionalProperties": false,
            "minProperties": 1
        }
    },
    "getProjects": {
        "properties": {
            "orderBy": { "enum": [ "title", "priority", "status", "createdAt" ] },
            "direction": { "enum": [ "asc", "desc" ] }
        },
        "additionalProperties": false
    }
};
