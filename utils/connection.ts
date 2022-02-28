import mongoose, { Model } from 'mongoose'

const { DATABASE_URL } = process.env

export const connect = async () => {
    const conn = await mongoose.connect( DATABASE_URL as string )
    console.log("Database connected")

    const TodoSchema = new mongoose.Schema( {
        item: String,
        completed: Boolean
    })

    const Todo = mongoose.models.Todo || mongoose.model( "Todo", TodoSchema )
    return { conn, Todo }
}


