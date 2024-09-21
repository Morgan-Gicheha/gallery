pipeline {
    agent any

    stages {
        stage('requirements') {
            steps {
                echo 'before npm install'
                sh 'npm install'
                echo 'After npm install'
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
