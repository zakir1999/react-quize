
import {useffect} from  'react';
import {getDatabase,ref,query,orderByKey,getDatabase} from firebase/database;
export default function useVideoList(){
    const [loading,sestLoading]=useState(true);
    const [errr,setError]=useState(false);

    useEffect(()=>{
        //database related works
        async function fetchVideos(){
            const db=getDatabase();
            const videosRef=ref(db,'videos');
            const videoQuery=query(
                videosRef,
                orderByKey();
            );
            try{
                setError(false);
                sestLoading(true);
                // request firebase database
                const snapshot=await get(videoQuery);
                sestLoading(false);
                if(snapshot.exists()){

                }else{

                }




            }catch(e){
                console.log(e);


            }
        }
        fetchVideos();
    },[]);
}