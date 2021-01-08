pipeline {
    agent any

    tools { nodejs "Default" }

    stages {
        stage('install dependencies'){
            steps{
                sh 'yarn'
            }
        }
        stage('build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('clean nextcloudpi docker html2'){
            steps{
                sh 'docker exec nextcloudpi find /var/www/html2/ -type f -delete'
            }
        }
        stage('deploy to nextcloudpi docker html2'){
            steps{
                sh 'docker cp ./build/. nextcloudpi:/var/www/html2'
            }
        }
    }
}