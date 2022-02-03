export const realNumber = (id)=>{ 
    return id > 99 ? 'N° '+id : id > 10 ? 'N° 0'+id : 'N° 00'+id;
}