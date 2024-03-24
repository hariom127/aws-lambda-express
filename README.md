# Host Node.js Express.js REST API on AWS Lambda using Serverless

This project demonstrates how to deploy a Node.js Express.js REST API on AWS Lambda using the Serverless Framework. With this setup, you can leverage the scalability and cost-effectiveness of AWS Lambda to host your API without managing server infrastructure.

## Prerequisites

Before getting started, ensure you have the following:

- Node.js installed on your local machine
- AWS account with appropriate permissions
- Serverless Framework installed globally (`npm install -g serverless`)

## Installation

1. Clone this repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. AWS Credentials: Make sure your AWS credentials are configured either through AWS CLI or environment variables on your local machine.

2. Serverless Configuration: Customize the `serverless.yml` file according to your project requirements. You may need to adjust settings like region, stage, etc.

## Deployment

To deploy the API to AWS Lambda, run the following command:

```bash
npm run deploy
```

This will package and deploy your Node.js Express.js application to AWS Lambda along with any necessary AWS resources.

## Usage

Once deployed, the API endpoints will be available on AWS Lambda. You can use tools like Postman or cURL to interact with your API.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests for any improvements or bug fixes.


## Acknowledgments

- [Serverless Framework](https://www.serverless.com/) - For simplifying serverless application deployment.
- [AWS Lambda](https://aws.amazon.com/lambda/) - For providing scalable serverless computing.
- [Express.js](https://expressjs.com/) - For building the Node.js REST API.

## Author

[Hariom Nager](https://github.com/hariom127)

## Contact

For any inquiries or support, please contact [career.it20@gmail.com](mailto:career.it20@gmail.com).
