import conf from "../conf/conf";
import { Client, Databases, Storage, ID } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // CREATE POST
   async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(), // ✅ ALWAYS USE THIS
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        );
    } catch (error) {
        console.log("Appwrite createPost error:", error);
    }
}
    // GET POSTS
    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            );
        } catch (error) {
            console.log("Appwrite getPosts error:", error);
        }
    }

// GET SINGLE POST
async getPost(slug) {
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        );
    } catch (error) {
        console.log("Appwrite getPost error:", error);
        return null;
    }
}

    // UPLOAD FILE
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Upload file error:", error);
        }
    }

    // 🔥 FINAL IMAGE URL (WORKING)
    getFilePreview(fileId) {
        return `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/view?project=${conf.appwriteProjectId}`;
    }

    // DELETE FILE (optional)
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Delete file error:", error);
        }
    }


    // ✅ UPDATE POST (EDIT)
async updatePost(documentId, { title, content, featuredImage, status }) {
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId,
            {
                title,
                content,
                featuredImage,
                status,
            }
        );
    } catch (error) {
        console.log("Appwrite updatePost error:", error);
        return null;
    }
}
async deletePost(documentId) {
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId
        );
        return true;
    } catch (error) {
        console.log("Appwrite deletePost error:", error);
        return false;
    }
}

// ❤️ UPDATE LIKES
async updateLikes(documentId, likes) {
    try {
        const response = await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId,
            { likes }
        );

        console.log("✅ Likes updated:", response);
        return response;

    } catch (error) {
        console.log("❌ Like update error:", error);
        return null;
    }
}

// 💬 ADD COMMENT
async addComment(documentId, newComment) {
    try {
        const post = await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId
        );

        const updatedComments = [
            ...(post.comment || []),   // ✅ use comment
            newComment
        ];

        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            documentId,
            { comment: updatedComments }   // ✅ use comment
        );

    } catch (error) {
        console.log("Comment error:", error);
    }
}


}

const service = new Service();
export default service;