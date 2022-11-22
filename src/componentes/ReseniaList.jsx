import Resenia from "./Resenia"

const ReseniaList = ( { listaresenias } ) => {
    if (!listaresenias || listaresenias.length === 0) {
        return <p>no hay reseñas</p>
    }else{
        return (
            <div className="feedback-list">
                { listaresenias.map((resenia)=>
                        
                    // <div className="card">
                    //     { resenia.id }
                    //     { resenia.rating }
                    //     { resenia.text }
                    // </div>

                    
                    <Resenia key={resenia.id} resenia={resenia} />
                    
                        
                ) }
            </div>
        )
    }
}

export default ReseniaList