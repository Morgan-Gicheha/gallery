pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
         RECIPIENTS = 'morgangicheha4@gmail.com'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Before npm install'
                sh 'npm install'
                echo 'After npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Before Tests'
                script {
                    try {
                         sh 'npm test'
                    } catch (Exception e) {
                         currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
                echo 'After Tests'
            }
        }

        stage('Run App') {
            when {
                 expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'Before npm start'
                sh 'npm start'
                echo 'After npm start'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }



        failure {
            echo 'Build Failed!'
            mail to: "${RECIPIENTS}",
                 subject: "Build Failure: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                 body: "The build ${env.BUILD_NUMBER} for project ${env.JOB_NAME} has failed. Please check the logs for more details."
        }
    }
}
