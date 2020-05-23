import {WorkPriority, WorkStatus} from "../../common/services/constants.service";

export const projectsSchemas = {
    "project": {
        "full": {
            "properties": {
                "title": { "type": "string" },
                "description": { "type": "string" },
                "priority": { "enum": [
                        WorkPriority.Low,
                        WorkPriority.Normal,
                        WorkPriority.High,
                        WorkPriority.Urgent
                    ] },
                "status": { "enum": [
                        WorkStatus.NotStarted,
                        WorkStatus.Started,
                        WorkStatus.Done,
                        WorkStatus.Rejected,
                        WorkStatus.Accepted
                    ] }
            },
            "additionalProperties": false,
            "required": [ "title", "description", "priority", "status" ]
        },
        "partial": {
            "properties": {
                "title": { "type": "string" },
                "description": { "type": "string" },
                "priority": { "enum": [
                        WorkPriority.Low,
                        WorkPriority.Normal,
                        WorkPriority.High,
                        WorkPriority.Urgent
                    ] },
                "status": { "enum": [
                        WorkStatus.NotStarted,
                        WorkStatus.Started,
                        WorkStatus.Done,
                        WorkStatus.Rejected,
                        WorkStatus.Accepted
                    ] }
            },
            "additionalProperties": false,
            "minProperties": 1
        }
    },
    "getProjects": {
        "properties": {
            "limit": {
                "type": "string",
                "pattern": "^[1-9](\\d)*"
            },
            "page": {
                "type": "string",
                "pattern": "^[1-9](\\d)*"
            },
            "orderBy": { "enum": [ "title", "priority", "status", "createdAt" ] },
            "direction": { "enum": [ "-1", "1" ] },
            "status": {
                "type": "string",
                "pattern": "^\\w+(\\|\\w+)*$"
            },
            "priority": {
                "type": "string",
                "pattern": "^\\w+(\\|\\w+)*$"
            }
        },
        "additionalProperties": false
    }
};
