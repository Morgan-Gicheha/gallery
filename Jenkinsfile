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
            post {
                success {
                    echo 'Tests passed. Sending Slack notification...'
                    slackSend(
                        color: '#36a64f',
                        message: "Tests passed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
                    )
                }
                failure {
                    echo 'Tests failed. Sending Slack notification...'
                    slackSend(
                        color: '#ff0000',
                        message: "Tests failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}"
                    )
                }
            }
        }
        stage('Run APP') {
            steps {
                echo 'before npm start'
                sh 'npm start & sleep 10 && kill $!'
                echo 'After npm start'
            }

            post {
                success {
                    echo 'Pipeline completed successfully. Sending Slack notification...'
                    slackSend(
                color: '#36a64f',
                message: """
                *Build ID*: ${env.BUILD_ID}
                *Render URL*: ${env.RENDER_URL}
                *Localhost*: ${env.LOCAL_URL}
                """
            )
                }
                failure {
                    echo 'Pipeline failed. Sending Slack notification...'
                    slackSend(
                color: '#ff0000',
                message: """
                Pipeline failed for *Build ID*: ${env.BUILD_ID}.
                Please check the logs and retry.
                """
            )
                }
            }

        }
    }
}
