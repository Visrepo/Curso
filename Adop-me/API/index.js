const cors = require('cors'); 
const express = require('express')
const { Op } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize')
const cachorro = require('./models/cachorros')
const app = express()
app.use(cors());

const sequelize = new Sequelize ({dialect: 'sqlite', storage: './adocao.db'})
const cachorros = cachorro(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

app.get('/cachorros', async(req, res)=>{ 
  const ListaCachorros = await cachorros.findAll(
    {where:{
      [Op.or]:[{adoptado: 'Adoptar'},{adoptado: 'Pendiente'}] 
          }
    })
res.json({cachorros:ListaCachorros})
})
//Read
app.get('/cachorros/pendientes', async(req, res)=>{ 
  const ListaCachorros = await cachorros.findAll(
    {where:{adoptado: 'Pendiente'} 
    })
res.json({cachorros:ListaCachorros})
})
// Create
app.post('/cachorros', async (req, res) => {
   const body = req.body
   const cachorro = await cachorros.create(body)

 res.json({ cachorro })
 })

// Update
app.put('/cachorros/:id', async (req, res) => {
   const cachorroId = req.params.id
   const body = req.body
   const cachorro = await cachorros.findByPk(cachorroId)
   if (cachorro) {
     
      await cachorro.update({ ...body })
      res.send({ cachorro })
   } else {
    
      res.status(404)
      res.send({ message: 'cachorro not found' })
    }
 })

// Delete task
app.delete('/cachorros/:id', async (req, res) => {
   const cachorroId = req.params.id
   const cachorro = await cachorros.findByPk(cachorroId)

   if (cachorro) {
     await cachorro.destroy()
     res.send({ cachorro })
   } else {
     res.status(404)
     res.send({ message: 'cachorro not found' })
   }
 })

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})
