import { Injectable } from '@nestjs/common';
const { PythonShell } = require('python-shell');
import { InputData } from './input-data.interface';

@Injectable()
export class RiskPredictionService {
  async predictRisk(inputData: InputData): Promise<any> {
    const scriptPath = 'C:\\Users\\ranug\\Desktop\\PCOSFC\\DecisionTree\\DecisionTree.py'; // Path to the Python script

    // Prepare input data as arguments
    const options = {
      mode: 'text',
      pythonOptions: ['-u'], // unbuffered output
      args: [
        inputData.bmi,
        inputData.cycle,
        inputData.prolactin,
        inputData.fshLhRatio,
      ],
    };

    return new Promise((resolve, reject) => {
      PythonShell.run(scriptPath, options, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
