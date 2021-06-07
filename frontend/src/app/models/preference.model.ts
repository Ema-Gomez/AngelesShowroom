export interface iPayer {
        name:string,
        surname:string,
        email:string,
        phone: {
            area_code:string,
            number:string,
        }
        identification:{
            type:string, 
            number:string
        },
        address:{
            zip_code:string,
            street_name:string,
            street_number:number
        }
}

export interface iShipsments{
    receiver_address:{
        city_name:string,
        state_name:string,
        zip_code:string,
        street_name:string,
        street_number:number,
        floor?:string,
        apartment?:string
    }    
}
export interface iItemMp{
        id:string
        title:string,
        description:string,
        picture_url:string,
        category_id:string,
        quantity: number,
        unit_price: number
}