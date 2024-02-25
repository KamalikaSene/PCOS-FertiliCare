import { Controller } from '@nestjs/common';

@Controller('doctors')
export class DoctorsController {
    @Get()
    findAll().{
        return []
    }

    @Get(":id")
    findOne().{
        return[];
    }
};


// controller file to handle all the routes in respect to doctors.