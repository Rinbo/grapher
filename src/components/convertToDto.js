const convertToDto = (yInputs, datasetNames, xAxisLabels, axisNames, title) => {
  const convertedYInputs = yInputs.map(arr => {
    return {
      datapoints: arr.map(datapoint => {
        return { datapoint };
      })
    };
  });

  const convertedDatasetNames = datasetNames.map(datasetName => {
    return { datasetName };
  });

  const convertedXAxisLabels = xAxisLabels.map(xAxisLabel => {
    return { xAxisLabel };
  });

  const generatePublicString = length => {
    const alphaNumericBuildingBlock = "abcdefghijklmopqrstuvwxyz1234567890";
    const numberOfBlocks = alphaNumericBuildingBlock.length;
    const publicStringArray = [];
    for (let i = 0; i < length; i++) {
      publicStringArray.push(
        alphaNumericBuildingBlock[Math.floor(Math.random() * numberOfBlocks)]
      );
    }
    return publicStringArray.join("");
  };

  return {
    yInputs: convertedYInputs,
    datasetNames: convertedDatasetNames,
    xAxisLabels: convertedXAxisLabels,
    xAxisName: axisNames[0],
    yAxisName: axisNames[1],
    title: title,
    publicString: generatePublicString(12)
  };
};

export default convertToDto;
