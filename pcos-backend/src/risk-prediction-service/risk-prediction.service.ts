//'C:\\Users\\ranug\\Desktop\\PCOSFC\\DecisionTree\\DecisionTree.py'
import { Injectable } from '@nestjs/common';
import * as child_process from 'child_process';

@Injectable()
export class RiskPredictionService {
  async predictInfertilityRisk(patientData: any): Promise<string> {
    const pythonProcess = child_process.spawn('python', [
      'C:\\Users\\ranug\\Desktop\\PCOSFC\\DecisionTree\\DecisionTree.py',
      JSON.stringify(patientData),
    ]);

    const { stdout } = await new Promise((resolve, reject) => {
      pythonProcess.stdout.on('data', (data) => {
        resolve(data.toString());
      });
      pythonProcess.on('error', (error) => {
        reject(error);
      });
    });

    // Assuming the Python script outputs the prediction as a string
    return stdout.trim();
  }
}
