// const conf={
//     appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
//     appwritepid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDBID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteTableID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
// }//just an object

// export default conf  
// // //this is done to avoid writing import.meta.env again and again something the environment variable may not load which will crashed the website so to avoid this we create this and something the id can be in no but we to but in string always
// // and this is in js file because we dont hav eto render in the website and the main reason is because we are storing all values in databases in string format 

const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default conf;