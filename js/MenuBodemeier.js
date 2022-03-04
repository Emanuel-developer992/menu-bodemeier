window.onload = function() {
    var usuario = DatasetFactory.getDataset("credenciais", null, null, null);
    var user = usuario.values[0].USER

    var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", user, user, ConstraintType.MUST);
    var constraint = new Array(c1);
    var papeis = DatasetFactory.getDataset("workflowColleagueRole", null, constraint, null);

    var nFlow = papeis.values.length;

    var valid = 0;
    for (var i = 0; i < nFlow; i++) {
        var flow = papeis.values[i]["workflowColleagueRolePK.roleId"];
        if (flow == 'gestor_bode') {
            valid++;
        }
    }

    if (valid > 0) {
        $("#menuBode").removeClass('nav-close');
    }

}

function CE() {
    window.open('https://medcininstituto120197.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=CadastroEmpresa',"_self");
};
function CF() {
    window.open('https://medcininstituto120197.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=CadastroFuncionario',"_self");
};
function RHE() {
    window.open('https://medcininstituto120197.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=HoraExtra',"_self");
};
function RP() {
    window.open('https://medcininstituto120197.fluig.cloudtotvs.com.br/portal/p/1/Relatorio_Ponto',"_self");
};