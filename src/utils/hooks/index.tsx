import { useState, useEffect } from 'react'

    type freelance = {
    id: string,
    name: string,
    job: string,
    picture: string
}

 type donnee = {
    surveyData? : object,
    resultsData? : {
        title: string,
        description: string
    }[],
    freelancersList : freelance[]
 }

export function useFetch(url : string) {
    const [data, setData] = useState<donnee>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null)

    
    useEffect(() => {
    /*    fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });*/
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error);
                setError(true)
            }finally{
                setLoading(false)
            }
            
        }
        async function changeLoadingState(){
            setLoading(false)
        }
        if (url){
            fetchData()
        }else{
            changeLoadingState()
        }
    }, [url]);

    

    return { data, loading, error };
}