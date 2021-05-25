class AddDateToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :created_at, :datetime
    add_column :projects, :updated_at, :datetime
  end
end
