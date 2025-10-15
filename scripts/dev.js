#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

const apps = ['it', 'lasertag', 'games']

function startApp(appName, port) {
  const appPath = path.join(__dirname, '..', 'apps', appName)
  
  console.log(`🚀 Starting ${appName} on port ${port}...`)
  
  const child = spawn('yarn', ['dev'], {
    cwd: appPath,
    stdio: 'inherit',
    shell: true
  })

  child.on('error', (error) => {
    console.error(`❌ Error starting ${appName}:`, error)
  })

  return child
}

// Start all apps
const processes = apps.map((app, index) => {
  const port = 3000 + index
  return startApp(app, port)
})

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down all apps...')
  processes.forEach(process => {
    process.kill('SIGINT')
  })
  process.exit(0)
})

console.log('🎉 All apps started!')
console.log('📱 IT App: http://localhost:3000')
console.log('🎯 LaserTag App: http://localhost:3001')
console.log('🎮 Games App: http://localhost:3002')


