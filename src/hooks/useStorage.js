import { useState, useEffect } from "react";
import { projectStorage,projectFirestore,timestamp } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null); 
    useEffect(() => {
        //references
        const collectionRef = projectFirestore.collection('images');
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state changed', (snap) => {
            let percentage = (snap.bytesTransferred/ snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt})
            setUrl(url);
        });

    },[file]) ;
    return {progress, url,error};
}

export default useStorage