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
}
