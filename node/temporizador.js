/*
Agendando tarefas com schedule, com parametros de dia, tempo, data... ele irá executar uma função para mim
* /5 irá executar de 5 em 5 segundos, * em qualquer minuto, 18 será a hora, * * dia e mes e 2 será terça (começa do zero que é domingo)
*/
const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 18 * * 5", function () {
  console.log("executando a tarefa 1", new Date().getSeconds());
});
