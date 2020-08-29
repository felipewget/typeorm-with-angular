import { getRepository, Like, createQueryBuilder, Connection, getConnection } from 'typeorm';
import { Farmer }   from '../entity/Farmer';
import { Request, Response } from 'express';

export const getFarmersByNameOrDoc = async (request: Request, response: Response) => {

    let { search } = request.body.search
                        ? request.body
                        : request.query
                        
    // @TODO Add Like() and remove filter
    let data = await getRepository(Farmer).find({
        relations: ['documents', 'addresses']
    });

    data = await data.filter( obj => {
        
        let condition_1 = ( obj.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || obj.documents[0] && obj.documents[0].document_number && obj.documents[0].document_number.includes(search) )
        let condition_2 = obj.addresses.length > 0 && obj.documents.length > 0;

        return condition_1 && condition_2;

    } )
    
    let response_api = await data.map( obj =>{
        
        delete( obj.addresses[0].deleted_at )
        delete( obj.addresses[0].updated_at )
        delete( obj.addresses[0].created_at )
        delete( obj.addresses[0].id )

        return {
            id: obj.id,
            document: {
                documentNumber: obj.documents[0].document_number,
                documentType: obj.documents[0].document_type,
            },
            name: obj.name,
            address: obj.addresses[0],
        };

    });
    
    return response.json( response_api );

}