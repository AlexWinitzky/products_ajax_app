class ProductsController < ApplicationController
  before_action :set_product, only: [:show]

 def index
    @products = Product.all
  end

  def show
    render partial: 'product', locals: { product: @product}
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

end
