import pandas as pd
import numpy as np

data = {
    'Feature1': np.random.rand(100),
    'Feature2': np.random.randint(0, 2, size=100),
    'Target': np.random.randint(0, 2, size=100)
}