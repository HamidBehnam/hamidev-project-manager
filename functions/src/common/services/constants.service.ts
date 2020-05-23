export enum ValidationDataSource {
    Query,
    Headers,
    Body
}

export enum WorkPriority {
    Low = '0',
    Normal = '1',
    High = '2',
    Urgent = '3'
}

export enum WorkStatus {
    NotStarted = '0',
    Started = '1',
    Done = '2',
    Rejected = '3',
    Accepted = '4'
}

export enum Role {
    Guest,
    Developer,
    Manager,
    Creator
}
