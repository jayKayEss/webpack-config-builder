"use strict"

const innerIfFunc = (condition, block, environment, previous, Type) => {
  if (condition) {
    return block(Type(previous)).generate(environment)
  }
  return previous(environment)
}

const IfFunc = (previous, Type) => {
  return (condition, block) => {
    return Type((environment) => {
      return innerIfFunc(condition, block, environment, previous, Type)
    })
  }
}

const IfEnv = (previous, Type) => {
  return (target, block) => {
    return Type((environment) => {
      return innerIfFunc(environment.includes(target), block, environment, previous, Type)
    })
  }
}

const UnlessEnv = (previous, Type) => {
  return (target, block) => {
    return Type((environment) => {
      return innerIfFunc(!environment.includes(target), block, environment, previous, Type)
    })
  }
}

module.exports = {
  IfFunc,
  IfEnv,
  UnlessEnv
}
