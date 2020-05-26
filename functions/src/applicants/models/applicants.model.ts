import {db, mongoReference} from "../../common/services/mongodb.service";
import {DeleteWriteOpResultObject, InsertOneWriteOpResult} from "mongodb";

export const createApplicant = async (applicantData: any) => {

    const applicant = await db.collection('applicants').findOne({userId: applicantData.userId});

    if (applicant) {
        throw {
            message: 'the applicant already exists!'
        };
    }

    const insertApplicantResult: InsertOneWriteOpResult<any> = await db.collection('applicants').insertOne({
        ...applicantData,
        createdAt: new Date()
    });

    return insertApplicantResult.ops[0];
};

export const getApplicants = async () => {

    return await db.collection('applicants').find({}).toArray();
};

export const getApplicant = async (applicantId: string) => {

    const applicantIdObject = new mongoReference.ObjectID(applicantId);
    return await db.collection('applicants').findOne({_id: applicantIdObject});
};

export const deleteApplicant = async (applicantId: string) => {

    const applicantIdObject = new mongoReference.ObjectID(applicantId);
    const deletionResult: DeleteWriteOpResultObject = await db.collection('applicants').deleteOne({_id: applicantIdObject});

    if (deletionResult.deletedCount === 0) {
        throw {
            message: "can't find the applicant to delete."
        };
    }
};

export const updateApplicant = async (applicantId: string, applicantData: any) => {

    const applicantIdObject = new mongoReference.ObjectID(applicantId);
    return await db.collection('applicants').updateOne(
        {_id: applicantIdObject},
        {$set: applicantData}
        );
};
