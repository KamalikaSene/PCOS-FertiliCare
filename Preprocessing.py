{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "mount_file_id": "19vnWAwxA3ykqyknbvSyRVfv27NZx45fP",
      "authorship_tag": "ABX9TyOyVd5wdtDsUhbpPTVrByr1",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/KamalikaSene/PCOS-FertiliCare/blob/ML-Preprocessing/Preprocessing.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": 2,
      "metadata": {
        "id": "-UX1Bp1bReCc"
      },
      "outputs": [],
      "source": [
        "import copy\n",
        "import time\n",
        "import numpy as np\n",
        "import pandas as pd\n",
        "import warnings\n",
        "import seaborn as sns\n",
        "warnings.filterwarnings(\"ignore\")\n",
        "import matplotlib.pyplot as plt\n",
        "import os\n",
        "import openpyxl\n",
        "import sklearn"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "df = pd.read_excel(\"PCOS_data_without_infertility.xlsx\",sheet_name=1)"
      ],
      "metadata": {
        "id": "YM9s_4kYavOQ"
      },
      "execution_count": 3,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [],
      "metadata": {
        "id": "5R0nbMd6a17t"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}