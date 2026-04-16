import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../utils/contex/context'

    type freelance = {
    id: string,
    name: string,
    job: string,
    picture: string
}

type resut = {
        title: string,
        description: string
    }

 type donnee = {
    surveyData? : object,
    resultsData? : resut[],
    freelancersList : freelance[],
 }

export function useFetch(url : string) {
    const [data, setData] = useState<donnee >({surveyData : {}, resultsData : [], freelancersList : []});
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


export function useTheme(){
    
    const { theme } = useContext(ThemeContext)

    return {theme}
}
