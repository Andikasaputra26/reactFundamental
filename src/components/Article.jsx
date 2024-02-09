import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context';

const NewArticle = () => {
    return <span>-- Baru !!</span>
}

const Article = (props) => {
    const user = useContext(GlobalContext)
    return (
        <>
            <h3>{props.title}</h3>
            <small>Date: {props.date} Tags:{props.tags.join(", ")} 
             {props.isNew && <NewArticle/>}
             </small>
             <div>
                <small>Di Tulis oleh {user.username}</small>
             </div>
        </>
    );
};

export default Article;