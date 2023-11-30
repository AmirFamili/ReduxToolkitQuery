import React, { useState } from 'react';
import '../styles/AlbumList.scss';
import { useGetAlbumsQuery, useDeleteAlbumMutation } from '../app/services/AlbumApi';


const AlbumList = ({ setSelectedAlbum }) => {

    const [page, setPage] = useState(1);
    const { data: albums, isLoading, isFetching, isError, error } = useGetAlbumsQuery(page);
    const [deleteAlbum] = useDeleteAlbumMutation();
    if (isLoading || isFetching) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>{error.status}</div>
    }

    return (
        <div className='box'>
            <h2>Albums:</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th></th>
                </tr>
                {
                    albums.map(album => (
                        <tr>
                            <th>{album.id}</th>
                            <th>{album.title}</th>
                            <th>
                                <button onClick={() => setSelectedAlbum(album)}>Edit</button>
                                <button onClick={() => deleteAlbum(album.id)}>Delete</button>
                            </th>
                        </tr>
                    ))
                }
                </table>
                <div className='change-page'>
                <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
                <button disabled={albums.length < 10} onClick={() => setPage((prev) => prev + 1)}>Next</button>
                </div>
            
        </div>
    );
}

export default AlbumList;