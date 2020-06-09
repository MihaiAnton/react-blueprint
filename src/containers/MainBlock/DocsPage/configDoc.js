const configDoc=[
    {
        key:"DATA_PROCESSING",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether or not the pipeline does data processing"
    },
    {
        key:"DATA_PROCESSING_CONFIG",
        description:"Configuration for the data processing module"
    },
    {
        key:"NO_PROCESSING",
        default:"false",
        choices:"[true, false]",
        description:"Decide whether the pipeline should do any processing or not"
    },
    {
        key:"DATA_CLEANING",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether data cleaning should be performed"
    },
    {
        key:"DATA_CLEANING_CONFIG",
        description:"Configuration for the data cleaning module"
    },
    {
        key:"COLUMNS_TO_REMOVE",
        default:"[]",
        choices:"[\<any column name\>,]",
        description:"Any column that is marked explicitly to be removed"
    },
    {
        key:"DO_NOT_REMOVE",
        default:"[]",
        choices:"[\<any column name\>,]",
        description:"Explicitly keep this columns"
    },
    {
        key:"REMOVE_WHERE_Y_MISSING",
        default:"",
        choices:"[true, false]",
        description:"Remove entries that do not have the output column"
    },
    {
        key:"REMOVE_ROWS",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether row removal is allowed"
    },
    {
        key:"ROW_REMOVAL_THRESHOLD",
        default:"0.6",
        choices:"float number in [0 - 1]",
        description:"The threshold of row removal ( there has to be 60%(by default) empty columns in order to remove the row)"
    },
    {
        key:"REMOVE_COLUMNS",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether column removal is allowed"
    },
    {
        key:"COLUMN_REMOVAL_THRESHOLD",
        default:"0.6",
        choices:"float number in [0 - 1]",
        description:"The threshold of column removal ( there has to be 60%(by default) empty rows in order to remove the column)"
    },
    {
        key:"PREDICTED_COLUMN_NAME",
        default:"\"\"",
        choices:"\<predicted column name\>",
        description:"The name of the output column"
    },
    {
        key:"FEATURE_ENGINEERING",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether feature engineering is allowed"
    },
    {
        key:"FEATURE_ENGINEERING_CONFIG",
        description:"Configuration for the data engineering module"
    },
    {
        key:"DO_NOT_PROCESS",
        default:"[]",
        choices:"[\<any column name\>,]",
        description:"Explicitly set dome columns to not be processed"
    },
    {
        key:"CONTINUOUS_FEATURES",
        default:"[]",
        choices:"[\<any column name\>,]",
        description:"Provide column names that are known to have a continuous distribution"
    },
    {
        key:"CATEGORICAL_FEATURES",
        default:"[]",
        choices:"[\<any column name\>,]",
        description:"Provide column names that are known to have a discrete distribution"
    },
    {
        key:"CATEGORICAL_THRESHOLD",
        default:"0.08",
        choices:"float in [0 - 1]",
        description:"The threshold ratio between the unique values and the total values count\n" +
            "                                                        (example: the number of unique values has to be 8% or more from the total number to be considered discrete)"
    },
    {
        key:"CONTINUOUS_DATA_CONFIG",
        description:"Configuration for the continuous data transformations"
    },
    {
        key:"NUMERIC",
        description:"Configuration for the numeric continuous data transformations"
    },
    {
        key:"NUMERIC - NOT_PROCESS",
        default:"false",
        choices:"[true, false]",
        description:"Decide whether to not process this type of data"
    },
    {
        key:"NUMERIC - OUTLIER_STDEV_FROM_MEAN",
        default:"5",
        choices:"integer in [0-inf]",
        description:"Decide how many standard deviations from the mean does an outlier mean (for value capping)"
    },
    {
        key:"NUMERIC - NORMALIZATION_METHOD",
        default:"z_score",
        choices:"[z_score,min_max]",
        description:"Decide what normalization technique is used"
    },
    {
        key:"NUMERIC - POLYNOMIAL_FEATURES",
        default:"3",
        choices:"integer in [0-inf]",
        description:"Decide how many polynomial features to create (example: for a feature x there will be created x, x^2, x^3 ... )"
    },

    {
        key:"TEXTUAL",
        description:"Configuration for the textual continuous data transformations"
    },

    {
        key:"TEXTUAL - WORD_DELIMITERS",
        default:"?!|/.,:;'-={}[]()",
        choices:"any string of delimiters",
        description:"Which word delimiters to use in stemming words"
    },
    {
        key:"TEXTUAL - MAX_GENERATED_FEATURES",
        default:"3",
        choices:"integer in [0-inf]",
        description:"How many features to be generated (sorted by their frequency)"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG",
        description:"Configuration for the categorical data transformations"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - NUMERIC",
        description:"Configuration for the categorical numeric data transformations"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - NUMERIC - NOT_PROCESS",
        default:"false",
        choices:"[true, false]",
        description:"Decide whether to not process this type of data"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - NUMERIC - METHOD",
        default:"one_hot_encode",
        choices:"[\"one_hot_encode\"]",
        description:"Decide the algorithm used for encoding categories"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - TEXTUAL",
        description:"Configuration for the categorical textual transformations"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - TEXTUAL - NOT_PROCESS",
        default:"false",
        choices:"[true, false]",
        description:"Decide whether to not process this type of data"
    },
    {
        key:"CATEGORICAL_DATA_CONFIG - TEXTUAL - METHOD",
        default:"one_hot_encode",
        choices:"[\"one_hot_encode\"]",
        description:"Decide the algorithm used for encoding categories"
    },
    {
        key:"TRAINING",
        default:"true",
        choices:"[true, false]",
        description:"Decide whether training should be done"
    },
    {
        key:"TRAINING_CONFIG",
        description:"Configuration for the training module"
    },
    {
        key:"TYPE",
        default:"default",
        choices:"[default,evolutionary]",
        description:"Decide the method to be used. 'default': using the default model provided below. 'evolutionary': searching for the best model as defined below"
    },
    {
        key:"TASK",
        default:"\"\"",
        choices:"[\"\",classification,regression]",
        description:"The type of learning that the user wants to be done (\"\" for automatic decision)"
    },
    {
        key:"TIME",
        default:"1m",
        choices:"xd yh zm ts",
        description:"The total time of training, expressed in days(d), hours(h), minutes(m), seconds(s) (example: \"1d 2h 0m 4s\")"
    },
    {
        key:"PREDICTED_COLUMN_NAME",
        default:"\"\"",
        choices:"<column name>",
        description:"The name of the predicted column"
    },
    {
        key:"DEFAULT_MODEL",
        default:"neural_network",
        choices:"[neural_network,random_forest,svm]",
        description:"The default training method (TYPE should be \"default\")"
    },
    {
        key:"NEURAL_NETWORK_CONFIG",
        description:"The configuration for the neural network. Needed if DEFAULT_MODEL=\"neural_network\" & TYPE=\"default\""
    },
    {
        key:"NEURAL_NETWORK_CONFIG - CRITERION",
        default:"MSE",
        choices:"[MSE,BCE]",
        description:"The criterion(loss function) used"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - OPTIMIZER",
        default:"Adam",
        choices:"[Adam,SGD]",
        description:"The optimizer used for the neural network"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - LEARNING_RATE",
        default:"0.002",
        choices:"positive float number",
        description:"The learning rate to be used in training"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - MOMENTUM",
        default:"0.1",
        choices:"positive float number",
        description:"The momentum to be used in training"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - HIDDEN_LAYERS",
        default:"[32,16]",
        choices:"Either \"smooth\" (the framework will gradually divide the input layer by 2 until it is smaller than the output layer), either list of layers like [20,10,9,8,4]",
        description:"The hidden layers of the model"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - ACTIVATIONS",
        default:"sigmoid",
        choices:"Either one of [sigmoid,relu,linear] or list of activations for each layer like [relu,relu,linear,sigmoid]",
        description:"The activation function used"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - DROPOUT",
        default:"0.1",
        choices:"positive float or list of floats for each layer",
        description:"The general dropout used or dropout for each layer"
    },
    {
        key:"NEURAL_NETWORK_CONFIG - BATCH_SIZE",
        default:"64",
        choices:"integer in [1-inf]",
        description:"Specifies the batch size of the neural network"
    },
    {
        key:"RANDOM_FOREST_CONFIG",
        description:"The configuration for the random forest. Needed if DEFAULT_MODEL=\"random_forest\" & TYPE=\"default\""
    },
    {
        key:"RANDOM_FOREST_CONFIG - CLASSIFIER - ",
        description:"Configuration for the random forest classifier"
    },
    {
        key:"RANDOM_FOREST_CONFIG - CLASSIFIER - N_ESTIMATORS",
        default:"100",
        choices:"integer in [1-inf]",
        description:"Number of estimators to use"
    },
    {
        key:"RANDOM_FOREST_CONFIG - CLASSIFIER - CRITERION",
        default:"gini",
        choices:"[gini,entropy]",
        description:"The criterion used for optimisation"
    },
    {
        key:"RANDOM_FOREST_CONFIG - CLASSIFIER - MIN_SAMPLES_SPLIT",
        default:"2",
        choices:"integer in [1-inf]",
        description:"Required samples to split a node"
    },
    {
        key:"RANDOM_FOREST_CONFIG - CLASSIFIER - MAX_FEATURES",
        default:"auto",
        choices:"[auto,sqrt,log2,none]",
        description:"Maximum features used in learning"
    },
    {
        key:"RANDOM_FOREST_CONFIG - REGRESSOR - N_ESTIMATORS",
        default:"100",
        choices:"integer in [1-inf]",
        description:"Number of estimators to use"
    },
    {
        key:"RANDOM_FOREST_CONFIG - REGRESSOR - CRITERION",
        default:"mse",
        choices:"[mse,mae]",
        description:"The criterion used for optimisation"
    },
    {
        key:"RANDOM_FOREST_CONFIG - REGRESSOR - MIN_SAMPLES_SPLIT",
        default:"2",
        choices:"integer in [1-inf]",
        description:"Required samples to split a node"
    },
    {
        key:"RANDOM_FOREST_CONFIG - REGRESSOR - MAX_FEATURES",
        default:"sqrt",
        choices:"[auto,sqrt,log2,none]",
        description:"Maximum features used in learning"
    },

    {
        key:"SVM_CONFIG",
        description:"The configuration for the svm. Needed if DEFAULT_MODEL=\"svm\" & TYPE=\"default\""
    },
    {
        key:"SVM_CONFIG - REGULARIZATION_C",
        default:"0.4",
        choices:"positive float",
        description:"The regularization parameter"
    },
    {
        key:"SVM_CONFIG - KERNEL",
        default:"poly",
        choices:"[linear,poly,rbf,sigmoid]",
        description:"The kernel type used."
    },
    {
        key:"SVM_CONFIG - POLY_DEGREE",
        default:"1",
        choices:"integer in [1-inf]",
        description:"The degree of the polynomial kernel function"
    },
    {
        key:"SVM_CONFIG - GAMMA",
        default:"scale",
        choices:"[scale,auto]",
        description:"Kernel coefficient"
    },
    {
        key:"SVM_CONFIG - DECISION_FUNCTION_SHAPE",
        default:"ovo",
        choices:"[ovo,ovr]",
        description:"Classification algorithm. OneVsOne or OneVsRest"
    },
    {
        key:"EVOLUTIONARY_MODEL_CONFIG",
        description:"The configuration for the svm. Needed if TYPE=\"evolutionary\""
    },
    {
        key:"EVOLUTIONARY_MODEL_CONFIG - MODELS",
        default:"[\"neural_network\"]",
        choices:"[\"neural_network\"]",
        description:"List of models to try in the flow"
    },
    {
        key:"EVOLUTIONARY_MODEL_CONFIG - GENERAL_CRITERION",
        default:"accuracy",
        choices:"[mean_absolute_error], [mean_squared_error], [mean_squared_log_error], [accuracy], [balanced_accuracy]",
        description:""
    },
    {
        key:"EVOLUTIONARY_MODEL_CONFIG - POPULATION_SIZE",
        default:"8",
        choices:"integer in [1-inf]",
        description:"The initial model population"
    },
    {
        key:"EVOLUTIONARY_MODEL_CONFIG - SEARCHING_TIME_SHARE",
        default:"0.5",
        choices:"float in [0-1]",
        description:"The percentage of time taken by searching"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG",
        description:"The configuration of the neural network for the evolutionary flow"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - OPTIMIZER_CHOICE",
        default:"[\"Adam\",\"SGD\"]",
        choices:"List of optimizers from [\"Adam\",\"SGD\"]",
        description:"The optimizer choice for the network"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - LEARNING_RATE_RANGE",
        default:"[0.000001, 0.1]",
        description:"Range for learning rate choices"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - MOMENTUM_RANG",
        default:"[0,1]",
        description:"Range for the momentum choices"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - HIDDEN_LAYERS_CHOICES",
        default:"[\"smooth\",[10,32,8]]",
        choices:"List of elements from [\"smooth\",[x,y,z]], where x=minimum layer size, y=maximum layer size, z=maximum layer count",
        description:"The choice of hidden layers (either smooth, as defined above in the neural network configuration,\n" +
            "                                                                            wither as a vector like [min_layer_size, max_layer_size, max_layers]"
    },

    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - ACTIVATION_CHOICES",
        default:"[\"sigmoid\",\"relu\",\"linear\"]",
        choices:"List of choices from [\"sigmoid\",\"relu\",\"linear\"]",
        description:"The choices for the activation functions"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - DROPOUT_RANGE",
        default:"[0,1]",
        description:"The dropout range"
    },
    {
        key:"NEURAL_NETWORK_EVOL_CONFIG - BATCH_SIZE_RANGE",
        default:"[1,128] ",
        description:"The batch size range"
    },
];

export default configDoc;