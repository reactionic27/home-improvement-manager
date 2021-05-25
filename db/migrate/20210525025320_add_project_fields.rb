class AddProjectFields < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string  :name,                 null: false, default: ""
      t.string  :description,          null: false, default: ""
      t.string  :type,                 null: false, default: ""
      t.integer :estimated_level,      null: false, default: 0
      t.integer :actual_level,         null: false, default: 0
      t.string  :status,               null: false, default: ""
    end
  end
end
