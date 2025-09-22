import React from 'react';

const SelectedCart = ({player, removePlayer}) => {
    const handleRemove=(ply)=>{
        removePlayer(ply)
    }
    return (
        <div className='max-w-[1200px] mx-auto '>
            <div className='border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl'>
                <div className='flex items-center gap-2'>
                    <img className='h-[50px] w-[50px] rounded-xl ' src={player.player_image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={()=>handleRemove(player)}>
                    <img className='w-[45px] ' src="https://i.ibb.co.com/ZpxBwNMT/delete-xxl.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCart;