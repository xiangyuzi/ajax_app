class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content]) #新規投稿内容を変数postに格納
    render json:{ post: post }  #json:オプションで直後の{post:post}というデータをJSON形式で返す。変数postの値をpostというキーで送る。
  end
end
