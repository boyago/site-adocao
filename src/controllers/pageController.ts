import {Request, Response} from 'express';
import { PET } from '../models/pet';

import { createMenuObject } from '../helpers/createMenuObject'


let list = PET.getAll();

export const home = (req: Request, res: Response) => {
    res.render('pages/page',{
        banner:{
            menu:createMenuObject('all'),
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req:Request, res:Response) =>{
    
    
    let list = PET.getFromType ('dog')


    res.render('pages/page',{
        banner:{
            menu:{
                all: false,
                dog: true,
                cat: false,
                fish: false},
            title:'Cães',
            background:'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req:Request, res:Response) =>{
    let list = PET.getFromType ('cat')

    res.render('pages/page',{
        banner:{
            menu:createMenuObject('cat'),
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req:Request, res:Response) =>{

    let list = PET.getFromType ('fish')


    res.render('pages/page',{
        banner:{
            menu:createMenuObject('fish'),
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
    });
}
