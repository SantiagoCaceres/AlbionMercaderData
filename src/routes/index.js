import { Router } from 'express'
import {WebScraper} from '../scripts/scarpy.js'
export const router = Router();
export var tabla;

router.get('/tabla', async (req, res) => {

    tabla=await WebScraper();
    res.render('tabla',{datos:tabla})
    
})
    
router.get('/about', (req, res) => res.render('about'))
router.get('/',  (req, res) => { res.render('index')
})

export default {router,tabla}