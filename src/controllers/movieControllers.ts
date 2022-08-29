 import { Request, Response } from 'express';
 import Logger from '../../config/logger';
 import { MovieModel } from '../models/Movie';

 export const createMovie = async (req: Request, res: Response) => {
   try{
     const data = req.body;
     const movie = await MovieModel.create(data);
     return res.status(201).json(movie);
   }catch(err: any) {
     Logger.error(`Erro no sistema: ${err.message}`)
   }
 }

 export const findMovieById = async (req: Request, res: Response) => {
   try{
     const id = req.params.id;
     const movie = await MovieModel.findById(id);

     if(!movie) return res.status(404).json({ error: 'O filme não existe.'});
     return res.status(201).json(movie);
   }catch(err: any) {
     Logger.error(`Erro no sistema: ${err.message}`)
   }
 }

 export const getAllMovies = async (req: Request, res: Response) => {
   try{
     const movies = await MovieModel.find();
     return res.status(200).json(movies);
   }catch(err: any) {
     Logger.error(`Erro no sistema: ${err.message}`)
   }
 }

 export const removeMovie = async (req: Request, res: Response) => {
   try{
     const id = req.params.id;
     const movie = await MovieModel.findById(id);

     if(!movie) return res.status(404).json({ error: 'O filme não existe.'});

     await movie.delete();
     return res.status(200).json({ msg: 'Filme removido com sucesso!' });
   }catch(err: any) {
     Logger.error(`Erro no sistema: ${err.message}`)
   }
 }

 export const updateMovie = async (req: Request, res: Response) => {
   try{
     const id = req.params.id;
     const data = req.body;

     const movie = await MovieModel.findById(id);
     if(!movie) return res.status(404).json({ error: 'O filme não existe.'});

     await MovieModel.updateOne({_id: id,}, data);
     return res.status(200).json(data);
   }catch(err: any) {
     Logger.error(`Erro no sistema: ${err.message}`)
   }
 }
