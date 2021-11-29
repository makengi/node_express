import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, HttpCode} from "routing-controllers";
import {StudentService} from "../service/StudentService";
import {Container, Inject, Service} from "typedi";
import {StudentDto} from "../model/StudentDto";

@JsonController("/students")
export class UserController{

    private readonly service:StudentService;

    constructor() {
        this.service = Container.get(StudentService);
    }

    @HttpCode(200)
    @Post()
    public async save(@Body() createStudent:StudentDto ){

    }


    @HttpCode(200)
    @Get('/student')
    public async getAll(){
        return this.service.findAll();
    }

    @HttpCode(200)
    @Get("/student/:id")
    public async getOne(@Param('id')id:number){
        return await this.service.search(id);
    }
}