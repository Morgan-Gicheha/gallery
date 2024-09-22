pipeline {
    agent any
    tools {
        nodejs 'NodeJS12'
    }
    stages {
        stage('requirements') {
            steps {
                echo 'before npm install'
                sh 'npm install'
                echo 'After npm install'
            }
        }
        stage('Tests') {
            steps {
                echo 'before Tests'
                sh 'npm test'
                echo 'After Tests'
            }
        }
        stage('Run APP') {
            steps {
                echo 'before npm start'
                sh 'npm start'
                echo 'After npm start'
            }
        }
    }
    post {
        success {
            echo 'Tests passed. Sending Slack notification...'
            slackSend (
                color: '#36a64f', 
                message: "Build passed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
            )
        }
        failure {
            echo 'Tests failed.'
        }
    }
}
