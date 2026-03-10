#!/usr/bin/env node

/**
 * oh-nano-agent - Ultra-lightweight Sub-Agent Framework
 * 
 * Inspired by Nanobot's minimalist approach.
 * Core philosophy: Do one thing well, with minimal overhead.
 */

const fs = require('fs');
const path = require('path');

class NanoAgent {
  constructor(config = {}) {
    this.name = config.name || 'nano-agent';
    this.model = config.model || 'qwen3';
    this.maxTokens = config.maxTokens || 4000;
    this.temperature = config.temperature || 0.7;
    this.memory = [];
    this.tools = config.tools || [];
  }

  addMessage(role, content) {
    this.memory.push({ role, content, timestamp: Date.now() });
    // Keep memory small - only last 10 messages
    if (this.memory.length > 10) {
      this.memory = this.memory.slice(-10);
    }
  }

  async run(task) {
    this.addMessage('user', task);
    
    // Simulate agent execution
    const result = {
      success: true,
      task,
      agent: this.name,
      model: this.model,
      startTime: Date.now(),
      steps: []
    };

    // Parse task and determine steps
    const steps = this.planSteps(task);
    
    for (const step of steps) {
      const stepResult = await this.executeStep(step);
      result.steps.push(stepResult);
    }

    result.endTime = Date.now();
    result.duration = result.endTime - result.startTime;

    this.addMessage('assistant', JSON.stringify(result));
    return result;
  }

  planSteps(task) {
    // Simple keyword-based planning
    const steps = [];
    
    if (task.includes('search') || task.includes('find')) {
      steps.push({ type: 'search', query: task });
    }
    if (task.includes('analyze') || task.includes('check')) {
      steps.push({ type: 'analyze', target: task });
    }
    if (task.includes('write') || task.includes('create')) {
      steps.push({ type: 'create', content: task });
    }
    
    // Default: just execute
    if (steps.length === 0) {
      steps.push({ type: 'execute', task });
    }
    
    return steps;
  }

  async executeStep(step) {
    // Minimal execution simulation
    return {
      type: step.type,
      status: 'completed',
      timestamp: Date.now(),
      result: `Executed ${step.type}`
    };
  }

  getMemory() {
    return this.memory;
  }

  clearMemory() {
    this.memory = [];
  }

  saveState(filepath) {
    const state = {
      name: this.name,
      model: this.model,
      memory: this.memory,
      timestamp: Date.now()
    };
    fs.writeFileSync(filepath, JSON.stringify(state, null, 2));
  }

  loadState(filepath) {
    const state = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    this.name = state.name;
    this.model = state.model;
    this.memory = state.memory || [];
  }
}

// CLI interface
if (require.main === module) {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  const agent = new NanoAgent({ name: 'cli-agent' });

  switch (command) {
    case 'run':
      agent.run(args.join(' ')).then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'memory':
      console.log(JSON.stringify(agent.getMemory(), null, 2));
      break;
    case 'clear':
      agent.clearMemory();
      console.log('Memory cleared');
      break;
    default:
      console.log('Usage: oh-nano-agent <run|memory|clear> [args]');
  }
}

module.exports = NanoAgent;
