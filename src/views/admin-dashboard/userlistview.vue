<script>
import advancedFiltre from '@/components/admin-dashboard-component/advancedSearch.vue'
export default {
    name: "userList",
    components:{
        advancedFiltre
    },
    methods:{
      toAddform:function(){
        this.$router.push('/dashboard/userlist/add')
      }
    }
}
</script>

<template>
    <div class="user-list-container">
        <div class="user-list-limiter">
            <h1 class="title-lead m-b-38">Utilisateurs</h1>
            <div class="filter-panel-section">
                <advancedFiltre></advancedFiltre>
            </div>    
            <div class="userlist-section m-t-31">
                <h5 class="card-header">Réputations des utilisateurs</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Utilisateurs</th>
                        <th>Membre depuis</th>
                        <th>Status à l’école</th>
                        <th>Roles</th>
                        <th>Notes</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
                        <td> 
                            <div class="user-info">
                                <div class="user-pic">
                                    <img src="../../assets/img/4200_6_04.png" alt="user-pic">
                                </div>
                                <div class="user-detail">
                                    <span class="username">Haja Ny Aina</span> <br>
                                    <span class="secondary">Modifié il y a 1 jour(s)</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span>4 Mars 2023</span> <br>
                            <span class="secondary">6:30 PM</span>
                        </td>
                        <td>
                            Etudiants en M1 GB
                        </td>
                        <td>
                            Modérateur
                        </td>
                        <td>
                            <font-awesome-icon icon="fa-regular fa-star" class="green m-r-5"/> 33
                        </td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <font-awesome-icon icon="fa-ellipsis-vertical" />
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="bx bx-edit-alt me-1"></i> Edit</a
                              >
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="bx bx-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
            <div class="bottoun-group m-t-50">
              <button class="bottoun bottoun-print">
                  Imprimer
              </button>
              <button class="bottoun bottoun-add" @click="toAddform">
                  Inviter
              </button>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/tabStyle.css" scoped></style>
