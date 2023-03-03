import {Request, Response} from 'express';

import { PET } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req:Request, res:Response) =>{
    
    let query: string = req.query.q as string;
    
    let list = PET.getFromName(query);

    res.render('pages/page', {
        menu:createMenuObject(''),
        list   
    })
   
    
}